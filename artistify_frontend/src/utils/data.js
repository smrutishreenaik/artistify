export const categories = [
  {
    name: 'PencilSketch',
    image: 'https://firebasestorage.googleapis.com/v0/b/finalstreamingapp.appspot.com/o/major_project%2Fcategories%2Fpencilsketch.jpg?alt=media&token=3ab0e9da-be17-4da6-9e96-a39ef7a6118f',
  },
  {
    name: 'Watercolor',
    image: 'https://firebasestorage.googleapis.com/v0/b/finalstreamingapp.appspot.com/o/major_project%2Fcategories%2Fwatercolor.jpg?alt=media&token=3cca2ef6-e929-4a12-8b9e-a4192f3e1969',
  },
  {
    name: 'Acrylic',
    image: 'https://firebasestorage.googleapis.com/v0/b/finalstreamingapp.appspot.com/o/major_project%2Fcategories%2Facrylic.jpg?alt=media&token=0d940927-ff76-4d9a-9dbe-beea755a3667',
  },
  {
    name: 'OilPainting',
    image: 'https://firebasestorage.googleapis.com/v0/b/finalstreamingapp.appspot.com/o/major_project%2Fcategories%2Foilpainting.jpg?alt=media&token=5beaa204-60f3-4e8a-a6ec-32ac365dca89',
  },
  {
    name: 'Crafts',
    image: 'https://firebasestorage.googleapis.com/v0/b/finalstreamingapp.appspot.com/o/major_project%2Fcategories%2Fcrafts.jpg?alt=media&token=7c12bebf-0f0c-4d9c-8bff-ecdc7b414ef9',
  },
];

export const userQuery = (UserId) => {
    const query = `*[_type == "user" && _id == '${UserId}']`;
    return query;
};

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };

  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

      export const pinDetailQuery = (pinId) => {
        const query = `*[_type == "pin" && _id == '${pinId}']{
          image{
            asset->{
              url
            }
          },
          _id,
          title, 
          about,
          category,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
         save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
          comments[]{
            comment,
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          }
        }`;
        return query;
      };

      export const pinDetailMorePinQuery = (pin) => {
        const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };

      export const userCreatedPinsQuery = (userId) => {
        const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };

      export const userSavedPinsQuery = (userId) => {
        const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };

      
  
