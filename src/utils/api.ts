import React from "react";
import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://gorest.co.in/public";

const onDownloadProgress = (progressEvent: any) => {
  // const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
  //   const current = progressEvent.currentTarget.response.length

  //   let percentCompleted = Math.floor(current / total * 100)
  //   console.log('completed: ', percentCompleted)
  console.log(progressEvent, "download")
}
const onUploadProgress = (progressEvent: any) => {
  // const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
  //   const current = progressEvent.currentTarget.response.length

  //   let percentCompleted = Math.floor(current / total * 100)
  //   console.log('completed: ', percentCompleted)
  console.log(progressEvent, "upload")
}

const config: AxiosRequestConfig = {
  baseURL,
}

export const withProgress = axios.create({
  ...config,
  onDownloadProgress,
  onUploadProgress,
})

const api = axios.create(config);

export { api as default };