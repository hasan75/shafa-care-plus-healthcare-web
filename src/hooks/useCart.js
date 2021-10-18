import { useEffect, useState } from "react";

const useCart = () => {
  const [selectedService, setSelectedService] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setSelectedService(cart);
  }, []);

  function getCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }

  function addToCart(service) {
    const isHave = selectedService.find(
      (selected) => selected.key === service.key
    );

    if (isHave) {
      alert("service has been selected!");
    } else {
      const newSelection = [...selectedService, service];
      localStorage.setItem("cart", JSON.stringify(newSelection));
      setSelectedService(newSelection);
    }
  }

  function remove(key) {
    const selectAfterRemove = selectedService.filter(
      (service) => service.key !== key
    );
    localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
    setSelectedService(selectAfterRemove);
  }

  return { setSelectedService, remove, addToCart, selectedService: selectedService };
};

export default useCart;
