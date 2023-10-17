const Calculate = {
    factorial(input){
      if(input === 0){
        return 1;
      }
      const fact = input => !input ? 1 : input * fact(--input);
      return fact(input);
    }
  }
  
  module.exports = Calculate;  