const useBackgrounImage = (current_route, given_route, bg_images) => {
  if ( current_route == given_route ) {
    document.body.className = `bg-space-black ${bg_images} bg-no-repeat bg-cover`
    return
  }
  document.body.className = 'bg-home-mob md:bg-home-tab lg:bg-home-desk bg-no-repeat bg-cover'
}

export default useBackgrounImage
