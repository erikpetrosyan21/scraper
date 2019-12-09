<template>
  <div class="Product">
    <div class="row">
      <div class="col-sm-3 m-2" v-for="(title,index) in titles" v-bind:key="title.id">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-12">
              <img v-bind:src="imgs[index]" class="card-img" alt="..." />
            </div>
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{contents[index]}}</p>
                <p class="card-text">
                  <small class="text-muted">{{times[index]}}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "Product",
  data() {
    return {
      titles: [],
      contents: [],
      times: [],
      imgs: [],
      socket: io("localhost:3000")
    };
  },
  methods: {},
  mounted() {
    this.socket.on("ScrapData", data => {
      this.contents = data[0].content;
      this.titles = data[1].title;
      this.imgs = data[2].imgUrl;
    });
  }
};
</script>