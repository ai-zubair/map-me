class LocationMap {
  private googleMap: google.maps.Map;

  constructor(containerID: string){
    this.googleMap = new google.maps.Map(document.getElementById(containerID),{
      zoom: 1,
      center: {
        lat:0,
        lng:0 
      }
    })
  }
}

export { LocationMap };