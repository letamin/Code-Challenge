export default {
  methods: {
    isNumber(evt) {
      const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const keyPressed = evt.key;

      if (!keysAllowed.includes(keyPressed)) {
        if (
          (evt.keyCode != 8 && //Backspace
            evt.keyCode != 46 && //Delete
            evt.keyCode != 37 && //Arrow left
            evt.keyCode != 38 && //Arrow up
            evt.keyCode != 39 && //Arrow right
            evt.keyCode != 40 && //Arrow down
            evt.keyCode != 9) || //Tab
          evt.keyCode == 69 // letter e
        ) {
          evt.preventDefault();
        }
      }
    },
  },
};
