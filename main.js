  

let app = new Vue({
  el: '#app',
  data : {
    sitename: "After School Club",
    // make the below component as array of object, right now its object only.
    school:{
      id: 01,
      image: 'maths.jpeg',
      title: "Math",
      location: "London",
      price: "100",
      spaces: 5
    },
    cart: [],
  },
  methods: {
    addToCart() {
      this.cart.push(this.school.id);
      }
    },
    computed: {
      cartItemCount() {
        return this.cart.length ;
      },
      cartMSpaces() {
        return this.school.spaces -  this.cart.length  ;
      },
      
      canAddToCart() {
        //console.log(this.school.spaces, this.cartItemCount)
        return this.school.spaces > this.cart.length;
      }
    }
})


