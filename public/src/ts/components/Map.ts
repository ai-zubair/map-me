interface Mappable{
  location: {
    lat: number;
    lng: number;
  };
  popupContent(): string;
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

    const entityMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    const popupWindow = new google.maps.InfoWindow({
      content: mappable.popupContent()
    })

    entityMarker.addListener("click",()=>{
      popupWindow.open(this.googleMap,entityMarker);
    })

  }
}

export { LocationMap, Mappable };