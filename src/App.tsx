import { useState, useEffect } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Falha ao buscar produtos:", err);
        setError(err.message || "Ocorreu um erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <body className='bg-gray-800'>
    <div className='container mx-auto p-4 bg-gray-800 text-center'>
      <h1 className='text-4xl font-extrabold mb-8 text-white'>Amazing - Products List</h1>

      {/* 1. Mostra a mensagem de ERRO se houver um */}
      {error && (
        <div className="text-center text-2xl text-red-600 font-semibold">
          <p>Erro: {error}</p>
          <p className="text-lg text-white mt-2">Por favor, tente recarregar a página.</p>
        </div>
      )}

      {/* 2. Mostra a mensagem de CARREGANDO se não houver erro E estiver carregando */}
      {!error && loading && (
        <div className="text-center text-2xl text-blue-500 font-semibold">
          Carregando produtos...
        </div>
      )}

      {/* 3. Mostra os PRODUTOS se não houver erro E não estiver carregando */}
      {!error && !loading && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <div key={product.id} className='bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col'>
              <div className='flex-shrink-0'>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className='w-full h-48 object-contain p-4 bg-gray-700 rounded-t-xl' 
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-white mb-2 line-clamp-3">{product.title}</h2>
                <p className="text-green-400 text-lg font-bold mb-3">${product.price.toFixed(2)}</p>
                <p className="text-gray-300 text-sm line-clamp-3">{product.description}</p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </body>
  );
}

export default App;