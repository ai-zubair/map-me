interface Mappable{
  location: {
    lat: number;
    lng: number;
  }
}

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

  addMarker(mappable: Mappable){
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}

export { LocationMap };