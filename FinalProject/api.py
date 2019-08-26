import itunespy
import json
import re, json, ast

def getArtist(result,search_name):
    artist = itunespy.search_artist(search_name)[0]
    name_temp = []
    album_temp = []
    song_temp = []
    year_temp = []
    image_temp = []
    genre_temp = []
    album = artist.get_albums()
    for i in range(len(album)):
        temp = []
        album_temp.append(album[i].collection_name)
        year_temp.append(album[i].release_date[0:10])
        image_temp.append(album[i].artwork_url_100)
        genre_temp.append(album[i].primary_genre_name)
        name_temp.append(album[i].artist_name)

        for track in album[i].get_tracks():
            temp.append(track.track_name)
        song_temp.append(temp)

    for i in range(len(album)):
        data = {}
        data['name'] = name_temp[i]
        data['album'] = album_temp[i]
        data['year'] = year_temp[i]
        data['image'] = image_temp[i]
        data['genre'] = genre_temp[i]
        data['song'] = []
        for j in range(len(song_temp[i])):
            data['song'].append(song_temp[i][j])
        result['artist'].append(ast.literal_eval(json.dumps(data)))

if __name__ == '__main__':
    result = {}
    result['artist'] = []
    getArtist(result, 'oasis')
    getArtist(result,'the beatles')
    getArtist(result,'norah jones')
    getArtist(result,'blake shelton')
    getArtist(result, 'sigur ros')
    getArtist(result,'kendrick lamar')
    getArtist(result,'willie nelson')
    getArtist(result,'queen')
    getArtist(result,'chet baker')
    getArtist(result,'kanye west')
    getArtist(result,'caspian')
    with open('data.json', 'w') as outfile:
        json.dump(result, outfile, indent=4)























