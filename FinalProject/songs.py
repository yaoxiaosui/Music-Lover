import itunespy
import json
import re, json, ast

def getSong(result,search_name):
    temp_artist_name = []
    temp_genre = []
    temp_track_name = []
    temp_date = []
    temp_preview = []
    temp_image = []
    temp_album = []

    artist = itunespy.search_artist(search_name)[0]

    for album in artist.get_albums():
        for tracks in album.get_tracks():
            temp_artist_name.append(tracks.artist_name)
            temp_genre.append(tracks.primary_genre_name)
            temp_track_name.append(tracks.track_name)
            temp_date.append(tracks.release_date[0:10])
            temp_preview.append(tracks.preview_url)
            temp_image.append(tracks.artwork_url_100)
            temp_album.append(tracks.collection_name)



    for i in range(50):
        data = {}
        data['artist'] = temp_artist_name[i]
        data['genre'] = temp_genre[i]
        data['track_name'] = temp_track_name[i]
        data['data'] = temp_date[i]
        data['preview'] = temp_preview[i]
        data['image'] = temp_image[i]
        data['album'] = temp_album[i]
        result['song'].append(ast.literal_eval(json.dumps(data)))




if __name__ == '__main__':
    result = {}
    result['song'] = []

    getSong(result, 'oasis')
    getSong(result, 'the beatles')
    getSong(result, 'norah jones')
    getSong(result, 'kendrick lamar')
    getSong(result, 'willie nelson')
    getSong(result, 'queen')
    getSong(result, 'blur')
    getSong(result, 'taylor swift')
    getSong(result, 'kanye west')
    getSong(result, 'john lennon')
    getSong(result, 'bob dylan')










    with open('song_data.json', 'w') as outfile:
        json.dump(result, outfile, indent=4)


