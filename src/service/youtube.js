class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions ={
            method: 'GET',
            redirect: 'follow'    
        }
    }
    async mostPopular(){
      const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query){
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD_EZJ9_I97yVPGl5NZJU9q9e4dJxUX58g&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoID }));
       
    }
}
export default Youtube;