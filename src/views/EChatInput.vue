<template>
  <v-footer color="#11273E" elevation="5">
    <v-row>
      <v-text-field
        class="text-box mx-2 my-1 px-6 py-2 rounded-pill"
        label="Type a message..."
        single-line
        hide-details
        dark
        v-model="message"
      ></v-text-field>

      <v-menu
        top
        offset-y
        :close-on-content-click="false"
        max-height="300"
        min-width="300"
        max-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="my-3" icon color="#CCC" v-bind="attrs" v-on="on">
            <v-icon class="mx-2" dark>mdi-emoticon-happy-outline</v-icon>
          </v-btn>
        </template>

        <div class="flex-wrap flex-column pa-4" style="background-color: #EEE; width: 300px;">
          <span class="emoji" v-for="(emoji, i) in emojis" :key="i" @click="updateMessage(i)">
            {{emoji}}
          </span>
        </div>
      </v-menu>

      <v-btn class="my-3" icon color="#CCC">
        <v-icon class="mx-2" dark>mdi-send</v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    message: "",
    emojis: [
      "😄",
      "😃",
      "😀",
      "😊",
      "😉",
      "😍",
      "😘",
      "😚",
      "😗",
      "😙",
      "😜",
      "😝",
      "😛",
      "😳",
      "😁",
      "😔",
      "😌",
      "😒",
      "😞",
      "😣",
      "😢",
      "😂",
      "😭",
      "😪",
      "😥",
      "😰",
      "😅",
      "😓",
      "😩",
      "😫",
      "😨",
      "😱",
      "😠",
      "😡",
      "😤",
      "😖",
      "😆",
      "😋",
      "😷",
      "😎",
      "😴",
      "😵",
      "😲",
      "😟",
      "😦",
      "😧",
      "👿",
      "😮",
      "😬",
      "😐",
      "😕",
      "😯",
      "😏",
      "😑",
      "👍",
      "👎",
      "👌",
      "👊",
      "✊",
      "👋",
      "✋",
      "👐",
      "👆",
      "👇",
      "👉",
      "👈",
      "🙌",
      "🙏",
      "👏",
      "💪",
    ],
  }),
  methods: {
    updateMessage: function (i) {
        console.log("here");
      this.message = this.message + this.emojis[i];
    },
  },
};
</script>

<style>
.text-box {
  height: 50px;
  background-color: #21374e;
  font-weight: 200;
  font-size: 18px;
}

.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}

.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}

.emoji {
    cursor: pointer;
    font-size: 20px;
    margin: 5px;
    user-select: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 5px;
}

.emoji:hover {
    background-color: #CCC;
}

::selection {
  color: #35B984;
  background: #31475E;
}
</style>