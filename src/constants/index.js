import * as Icon from '../component/icons'
import React from 'react'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    title: 'Ana sayfa',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Ara',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Kitaplığın',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLIST = [
    {
      title: 'Çalma Listesi Oluştur',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Beğenilen Şarkılar',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const PLAYLISTLINKS = [
    {
        title: 'Heavy Queens',
        path: '/'
    },
    {
        title: 'Daily Mix 1',
        path: '/'
    },
    {
        title: 'Purple Turtle',
        path: '/'
    },    {
        title: 'Volbeat Complate',
        path: '/'
    },
    {
        title: 'Vietnam War Era Music',
        path: '/'
    },
    {
        title: 'Türkçe Rock',
        path: '/'
    },
    {
        title: '5FDP',
        path: '/'
    }
]