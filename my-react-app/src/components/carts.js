// Define an object to manage the bakery cart
let BakeryCart = {
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
      console.log("Bakery Cart Contents:");
      this.items.forEach(item => {
        console.log(`${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  };
  
  // Export the bakeryCart object to be used in other modules
  export default BakeryCart;
  