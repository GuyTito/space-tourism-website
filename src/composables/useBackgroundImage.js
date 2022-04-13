const useBackgrounImage = (current_route, given_route, bg_images) => {
  if ( current_route == given_route ) {
    document.body.className = `${bg_images}`
    return
  }
}

export default useBackgrounImage
