import { useState, useEffect } from "react";

function Footer() {
  const [mostrarBtnSubir, setMostrarBtnSubir] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTopPlusWindowHeight = window.pageYOffset + window.innerHeight;

      
      if (scrollTopPlusWindowHeight >= scrollHeight - 100) {
        setMostrarBtnSubir(true);
      } else {
        setMostrarBtnSubir(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subirAlInicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
        <img src="/imagenes/logofacebook.png" width="30" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/imagenes/logoinstagram.png" width="30" alt="Instagram" />
      </a>

      {mostrarBtnSubir && (
        <button
          onClick={subirAlInicio}
          style={{
            position: "fixed",
            bottom: "85px",
            right: "20px",
            width: "30px",
            height: "30px",
            padding: 0,
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "White",
            backgroundImage: "url('/imagenes/arriba.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(255, 255, 255, 0.7)",
            zIndex: 1000,
          }}
          aria-label="Subir al inicio"
        ></button>
      )}
    </footer>
  );
}

export default Footer;