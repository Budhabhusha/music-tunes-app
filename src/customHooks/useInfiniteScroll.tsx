import React,{useEffect,useState,useRef} from 'react'
import { useCallback } from 'react';
import { debounce } from 'lodash';
import { current } from '@reduxjs/toolkit';
interface UseInfiniteScrollProps {
  callBack:() => void;
  containerRef?:any;
  isLoading:boolean
}

const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
  const {containerRef,callBack,isLoading} = props 
  const handelInfiniteScroll = useCallback(
    debounce(async () => {
      let isBottom = null
      if(containerRef?.current) {
        const scrollHeight = containerRef?.current?.scrollHeight;
        const scrollTop = containerRef?.current?.scrollTop;
        const clientHeight = containerRef?.current?.clientHeight;
        isBottom = scrollHeight - scrollTop === clientHeight;
        isBottom = containerRef?.current
      }
      if(isBottom && !isLoading) {
        callBack()
      }
    }, 500),[]
  );

  useEffect(()=>{
    if(containerRef.current){
      //@ts-ignore
      containerRef.current?.addEventListener('scroll',handelInfiniteScroll)
      //@ts-ignore
      return () =>containerRef.current?.removeEventListener('scroll',handelInfiniteScroll)
    }
  },[])

}

export default useInfiniteScroll