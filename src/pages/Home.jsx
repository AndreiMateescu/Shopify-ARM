import React from "react";
import Layout from "../components/Layout";
import HomeCategory from "../components/HomeCategory";
import products from "../utils/products.json";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const categories = Object.values(products);
    this.setState({
      categories,
    });
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="container">
            <div className="row">
              {this.state.categories.map((category, index) => (
                <HomeCategory
                  key={index}
                  image={category.image}
                  title={category.name}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
