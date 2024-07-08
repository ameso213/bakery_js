// Define an object to manage the cart
let cart = {
    items: [],
  
    // Function to add items to the cart
    addToCart(itemName, price, quantity) {
      // Check if item already exists in cart
      let found = this.items.find(item => item.name === itemName);
  
      if (found) {
        // If item exists, update quantity
        found.quantity += quantity;
      } else {
        // If item doesn't exist, add new item to cart
        this.items.push({ name: itemName, price: price, quantity: quantity });
      }
  
      // Display cart contents (you can update UI here)
      this.displayCart();
    },
  
    // Function to remove items from the cart
    removeFromCart(itemName) {
      // Filter out the item to be removed
      this.items = this.items.filter(item => item.name !== itemName);
  
      // Display cart contents (you can update UI here)
      this.displayCart();
    },
  
    // Function to update item quantity in the cart
    updateQuantity(itemName, quantity) {
      // Find the item in the cart
      let found = this.items.find(item => item.name === itemName);
  
      if (found) {
        // Update the quantity
        found.quantity = quantity;
      }
  
      // Display cart contents (you can update UI here)
      this.displayCart();
    },
  
    // Function to calculate total price of items in the cart
    calculateTotal() {
      let total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      return total.toFixed(2); // Ensure total is formatted to 2 decimal places
    },
  
    // Function to display cart contents
    displayCart() {
      // Output cart contents to console (example implementation)
      console.log("Cart Contents:");
      this.items.forEach(item => {
        console.log(`${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  };
  
  // Example usage:
  cart.addToCart("Chocolate Croissant", 3.50, 2); // Add 2 Chocolate Croissants to cart
  cart.addToCart("Blueberry Muffin", 2.75, 1);    // Add 1 Blueberry Muffin to cart
  cart.removeFromCart("Chocolate Croissant");     // Remove Chocolate Croissant from cart
  cart.updateQuantity("Blueberry Muffin", 3);     // Update quantity of Blueberry Muffin to 3
  
  // Display cart contents after operations
  cart.displayCart();
  