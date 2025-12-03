import './ProductCarousel.css'

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: '🧳',
      color: '#4a9c8c'
    },
    {
      id: 2,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🎧',
      color: '#e67e22'
    },
    {
      id: 3,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '🖥️',
      color: '#3498db'
    },
    {
      id: 4,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '🎨',
      color: '#9b59b6'
    },
    {
      id: 5,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '🍳',
      color: '#f1c40f'
    },
  ]

  return (
    <section className="product-carousel">
      <div className="carousel-glow"></div>
      <div className="carousel-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-card"
            style={{ background: product.gradient }}
          >
            <div className="card-icon">
              <span>{product.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCarousel
