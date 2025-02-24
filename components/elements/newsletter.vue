<template>
  <div class="grid gap-2 w-fit">
    <div class="w-fit">Laat hier je e-mailadres achter om nieuws uit de academie te ontvangen.</div>
    <div class="ml-embedded w-full" data-form="fv05nf"></div>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "assets/scripts/mailerlite.js",
      type: "text/javascript",
      async: true,
    }
  ],
});
</script>
<style>
#mlb2-10211545.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody, #mlb2-10211545.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
  padding: 0 0 0 0 !important;
}

#mlb2-10211545.ml-form-embedContainer .ml-form-align-center {
  text-align: left !important;
}

.ml-form-horizontalRow {
  display: flex;
}



#mlb2-10211545.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
  max-width: 100% !important;
  width: 100% !important;
}

.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal  {
  width: unset !important;
  flex-grow: 1;
}

#mlb2-10211545.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
  background-color: #c1e1d1 !important;
}

</style>