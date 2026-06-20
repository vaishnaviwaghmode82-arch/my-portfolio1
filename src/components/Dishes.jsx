function Dishes() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔥 Popular Biryanis</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500"
              className="card-img-top"
              alt="Chicken Biryani"
            />
            <div className="card-body">
              <h5>Chicken Biryani</h5>
              <p>₹299 <span className="text-danger">20% OFF</span></p>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1701579231349-b8f7691f7f6d?w=500"
              className="card-img-top"
              alt="Mutton Biryani"
            />
            <div className="card-body">
              <h5>Mutton Biryani</h5>
              <p>₹399 <span className="text-danger">15% OFF</span></p>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500"
              className="card-img-top"
              alt="Veg Biryani"
            />
            <div className="card-body">
              <h5>Veg Biryani</h5>
              <p>₹199 <span className="text-danger">10% OFF</span></p>
              <button className="btn btn-warning">
                Order Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dishes;