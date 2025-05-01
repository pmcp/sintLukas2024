<template>
  <client-only>
    <div>
  <h3 class="prosebecausenotprose">Afgelopen trajecten</h3>

    <div class="video-row flex flex-wrap gap-2" id="videoRow">
      <div class="video-column">
        <div class="video-wrapper">
          <iframe src="https://player.vimeo.com/video/724374792?h=572b863bfd" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="video-column">
        <div class="video-wrapper">
          <iframe src="https://player.vimeo.com/video/721389126?h=125db1d06c" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="video-column">
        <div class="video-wrapper">
          <iframe src="https://player.vimeo.com/video/722522564?h=a86382f226" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    </div>
  </client-only>
</template>

<style>
.prosebecausenotprose {
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}



.video-column {
  flex: 1;
  min-width: 300px; /* Ensures videos don't get too small */
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  background-color: #000; /* Black background to blend with videos */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Media query for smaller screens */
@media (max-width: 900px) {
  .video-column {
    flex-basis: calc(50% - 1px);
  }
}

/* Media query for mobile screens */
@media (max-width: 600px) {
  .video-column {
    flex-basis: 100%;
    min-width: 100%;
  }
}

</style>
<script setup lang="ts">
</script>