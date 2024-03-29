// Code
export const Media = () => {
  return <div>
    
    <h3>Default Image</h3>
    <img src="http://placehold.it/240x240" alt="Image alt text 3"/>

    <h3>Linked Image</h3>
    <a href="#"><img src="http://placehold.it/240x240" alt="Image alt text 4"/></a>

    <h3>Missing Image</h3>
    <img alt="This is an example of a missing image"/>

    <h3>Picture</h3>
    <picture>
      <source media="(min-width: 60em)" srcSet="http://placehold.it/600x600"/>
      <source media="(min-width: 40em)" srcSet="http://placehold.it/300x300"/>
      <source srcSet="http://placehold.it/150x150"/>
      <img src="http://placehold.it/150x150" alt="Image alt text 5"/>
    </picture>

    <h3>Svg</h3>
    <svg width="200px" height="200px">
      <circle cx="100" cy="100" r="100" fill="#ff0000" />
    </svg>


    <h3>Video</h3>
    <div>
      <video id="video1" controls preload="true" poster="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg" width="640" height="360">
        <source id="mp4" src="http://media.w3.org/2010/05/bunny/trailer.mp4" type="video/mp4"/>
        <source id="ogv" src="http://media.w3.org/2010/05/bunny/trailer.ogv" type="video/ogg"/>
        <p>Your user agent does not support the HTML5 Video element.</p>
      </video>
      <label htmlFor="video1">Video of Big Buck Bunny</label>
    </div>

    <h3>Missing Video</h3>
    <video id="video2" controls></video>
    <label htmlFor="video2">Missing video</label>


    <h3>Audio</h3>
    <audio controls>
      <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4" type='audio/mp4'/>
      <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type='audio/ogg; codecs=vorbis'/>
      <p>Your user agent does not support the HTML5 Audio element.</p>
    </audio>

    <h3>Missing Audio</h3>
    <audio controls></audio>

  </div>
}