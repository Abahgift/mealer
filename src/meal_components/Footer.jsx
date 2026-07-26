

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
            <a href="#" className="brand">
            Meal<span className="dot">DB</span>
            </a>
            <div>
            Data courtesy of{" "}
            <a href="https://www.themealdb.com/" target="_blank" rel="noopener">
                TheMealDB
            </a>
            </div>
        </div>
    </footer>

  )
}

export default Footer