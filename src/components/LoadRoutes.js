import React from 'react'
import Loadable from 'react-loadable'

const Home = Loadable({
  loading: () => <div>Loading....</div>,
  loader: () => import("./Home")
})

const Schedule = Loadable({
  loading: () => <div>Loading....</div>,
  loader: () => import("./Schedule")
})

const Sample = Loadable({
    loading: () => <div>Loading....</div>,
  loader: () => import("./Sample")
})

const Header = Loadable({
    loading: () => <div>Loading....</div>,
  loader: () => import("./Header")
})



export  {
    Home,
    Schedule,
    Sample,
    Header
}