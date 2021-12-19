import Document, { Html, Head, Main, NextScript } from "next/document";

import Footer from "./components/Footer";
import Header from "./components/Header";
// import "../assets/js/custom";
// import Navbar from "../components/Navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          {/* <main> */}
          <Main />
          {/* </main> */}
          <Footer />
          <NextScript />
          {/* <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"
          /> */}
          {/* <script src="../assets/js/custom.js" type="text/javascript" /> */}

          {/* <script>
            var loadScript = function(src) {
              var tag = document.createElement('script');
              tag.async = false;
              tag.src = src;
              document.getElementsByTagName('body')[0].appendChild(tag);
            }

            loadScript('./assets/js/custom.js')
          </script> */}
        </body>
      </Html>
    );
  }
}
