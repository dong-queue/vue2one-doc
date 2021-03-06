export default {
  data() {
    return {
      dialog: false,
      items: [
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
      items2: [
        { icon: 'mdi-clipboard-text', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'mdi-gesture-tap-button', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
      ],
    }
  },
  methods: {
    changeDialog (value) {
      this.dialog = value
    }
  }
}