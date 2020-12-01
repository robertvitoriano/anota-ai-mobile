

import React,{useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';


import NoteCard from './../../components/NoteCard'
import styles from './styles'



const Home = ({ navigation }) => {

const notes = [
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  },
  {
    body:"Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação Esse é meu texto do corpo da anotação",
    title:"Esse é o titulo da anotação"
  }
]

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        {notes.map(({body,title})=>(<NoteCard body={body} title={title}/>))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default Home;
