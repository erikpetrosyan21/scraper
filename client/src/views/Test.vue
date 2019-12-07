<template>
  <div class="test">
      <h2>111</h2>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'test',
  data() {
        return {
            socket : io('localhost:3000'),
            msge: []
        }
    },
    methods: {

    },
    mounted() {
        //   this.socket.emit('ONcode',{
        //       code: this.id
        //   });
        // this.socket.on(this.id, (data) => {
        //     this.msge.push(data);
        //     console.log(data)
        // });
    }
}
</script>