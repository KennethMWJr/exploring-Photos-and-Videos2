# Exploring-Photos-and-Videos
View photos and videos provided by the Pixabay API. 
http://nature-calming-effect.surge.sh/home

# Project Overview
In this project, users will view photos and videos from the Pixabay API.


## Project Description

The user will have access to view photos, videos, and details of them provided by the Pixabay API.  


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

https://www.figma.com/file/SfcMfLqkQ6PUGcdwegEJ6W/Untitled?node-id=2%3A0


## API Snippet
For Photos: 
{
totalHits: 500,
hits: [
{
largeImageURL: "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1237d9e751576c48702972dc974dc350ba_1280.jpg",
webformatHeight: 426,
webformatWidth: 640,
likes: 1010,
imageWidth: 6000,
id: 3063284,
user_id: 1564471,
views: 653086,
comments: 227,
pageURL: "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
imageHeight: 4000,
webformatURL: "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1237d9e751576c48702972dc974dc350ba_640.jpg",
type: "photo",
previewHeight: 99,
tags: "rose, flower, petal",
downloads: 416873,
user: "annca",
favorites: 875,
imageSize: 3574625,
previewWidth: 150,
userImageURL: "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg",
previewURL: "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg"
},

```
Paste a snippet from your API here that shows the shape of the data
```
For Videos:
{
totalHits: 73,
hits: [
{
picture_id: "563977619",
videos: {
large: {
url: "https://player.vimeo.com/external/161687568.hd.mp4?s=eff398051a1dd6ceaa16b85538940b07cebede70&profile_id=119",
width: 1920,
size: 13392449,
height: 1080
},
small: {
url: "https://player.vimeo.com/external/161687568.sd.mp4?s=4feca1b7112229c1ef975f13575a65a0bfe93767&profile_id=165",
width: 960,
size: 4940642,
height: 540
},
medium: {
url: "https://player.vimeo.com/external/161687568.hd.mp4?s=eff398051a1dd6ceaa16b85538940b07cebede70&profile_id=174",
width: 1280,
size: 7770061,
height: 720
},
tiny: {
url: "https://player.vimeo.com/external/161687568.sd.mp4?s=4feca1b7112229c1ef975f13575a65a0bfe93767&profile_id=164",
width: 640,
size: 1769296,
height: 360
}
},
tags: "dandelion, flowers, yellow",
downloads: 12741,
likes: 117,
favorites: 70,
duration: 23,
id: 2719,
user_id: 1981326,
views: 28238,
comments: 29,
userImageURL: "https://cdn.pixabay.com/user/2016/05/06/18-47-35-699_250x250.png",
pageURL: "https://pixabay.com/videos/id-2719/",
type: "film",
user: "FMFA"
},


### MVP/PostMVP - 5min 
MVP - Users will be able to view photos and vidoes on this app. Additionally they will be able to see details of each photo and video plus gain a sense of how photos or videos are trending in relation to other ones. 

PostMVP - Enable users to identify their favorite videos and photos. Organize the view of photos and videos in the form of a carousel.  

#### MVP EXAMPLE
- Find and use external api 
- Render data of interest on page in different ways visually 
- Render a footer with referencing API and info about self


#### PostMVP EXAMPLE
- Allow user to choose favorites and view them.
- Organize photos and videos with a carousel.

## React Component Hierarchy

Define the the React components and the architectural design of your app:

Page 3: 
https://www.figma.com/file/SfcMfLqkQ6PUGcdwegEJ6W/Untitled?node-id=2%3A0

## Priority Matrix

Add in a picture of your Priority Matrix

Page 4: 

https://www.figma.com/file/SfcMfLqkQ6PUGcdwegEJ6W/Untitled?node-id=2%3A0
          
          
          
          

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header, including the nav tags that contain links to the "Photos" and "Videos" components. | 
| Nav | Provides links for each page rendered. 
| Main | It will render links of photos and videos along with futher details of any link selected. 
| Home | Provides a welcome page. 
| Footer | This will render the footer, including links referencing the API and info about me. | 
| PhotosLink | Source of photos available in the API. 
| VideosLink | Source of videos available in the API.
| PhotoDisplay | adding a button to each photo with an event listener for conditional rendering. 
| VideoDisplay | adding a button to each video with an event listener for conditional rendering.
| PhotosDetails | Provides details of specific photo link chosen plus an indicator of how a photo is trending compared to others.
| VideoDetails |  Provides details of specific video link chosen plus an indicator of how a video is trending compared to others.


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | 1 | 5hrs | 12hrs | 8hrs |
| Working with API | 5 | 5hrs| 5hrs | 3hrs |
| Adding CSS| 2 | 10hrs | 16hrs | 10hrs |
| Adding JSX| 4 | 10hrs| 16hrs  | 12hrs |
| debugging | 3 |8hrs | 5hrs | 3hrs|
| Total |  |38hrs | 57hrs | 36hrs |


## Additional Libraries
axios and router (PostMVP: React Carousel)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
            <div>
		{this.props.videos.map((video, i) => (
                    <div key={i}>
                    <VideoDisplay video={video} />
		    </div>
		))}
	    </div>
Mapping over an array of objects in a component made me understand this function and passing props better. 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
