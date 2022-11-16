<template lang="pug">

v-row
  v-col(cols="12")
    v-card( width="250px")
      v-tabs(v-model="tab" background-color="white" centered dark icons-and-text)
        v-tab.mx-auto(href="#tab-1" )
          v-icon(color="black") mdi-format-list-checkbox
        v-tab(href="#tab-2")
          v-icon(color="black") mdi-calendar-check-outline

      v-tabs-items(v-model="tab")

        .text-h4.text-center(v-if="!checkDate") No List 

        v-tab-item(:value="'tab-1'")
          v-card
            v-card-text
              v-col(v-for="(item, ID) in sortList" :key="'1'+ID")
                v-btn(icon :color="item.status ? 'indigo' : 'black'" @click="changStatus(item.id,item)" )
                  v-icon {{item.status ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"}}
                span(:class="item.status ? 'text-decoration-line-through font-weight-thin' : ''") {{item.list}}

        v-tab-item(:value="'tab-2'")
          v-card
            v-card-text
              v-col(v-for="(item, ID) in checkTrue" :key="'1'+ID" @click="changStatus(item.id,item)")
                v-btn(icon :color="item.status ? 'indigo' : 'black'" @click="changStatus(item.id,item)" )
                  v-icon {{item.status ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"}}
                span(:class="item.status ? 'text-decoration-line-through font-weight-thin' : ''") {{item.list}}

      v-col.d-flex.justify-center
        v-dialog(v-model="dialog" persistent max-width="600px")
          template(v-slot:activator="{ on, attrs }")
            v-btn.mx-2.orange(fab dark v-bind="attrs" v-on="on")
              v-icon mdi-plus

          v-card
            v-card-title
              span(class="text-h5") Input Your Check Box
            v-card-text
              v-container
                v-row
                  v-col(cols="12")
                    v-text-field(label="Text" v-model="inputCheckBox")
                  
            v-card-actions
              v-btn(color="blue darken-1" text @click="dialog = false") Close
              v-btn(color="blue darken-1" text @click="insertList") Save
</template>

<script>
import { mapState } from "vuex"
import { mapGetters } from "vuex";
export default {
  name: 'InspirePage',

  data(){
    return{
      tab: null,
      dialog: false,
      inputCheckBox: ''
    }
  },
  computed:{
    ...mapState({
      listCheck: state => state.listCheck,
      }),
    ...mapGetters([
      'checkTrue',
      'sortList',
      'checkDate'
    ]),
  }, 
  methods: {
    insertList(){
      this.$store.commit('setData',{id: this.listCheck.length+1 , list: this.inputCheckBox , status: false})
      this.dialog = false
    },
    changStatus(item){
      this.$store.commit('setStatus',item)
    },
  },
}
</script>

<style>
</style>
