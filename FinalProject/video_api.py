import itunespy
import json
import re, json, ast

result = {}
result['video'] = []

def getVideo(result,search_name):
    videos = itunespy.search(search_name, media='musicVideo')
    data = {}
    data['name'] = []
    data['image'] = []
    data['preview_link'] = []
    data['collection_name'] = []
    data['year'] = []
    data['type'] = []
    temp_name = []
    temp_image = []
    temp_link = []
    temp_collection = []
    temp_year = []
    temp_type = []
    for i in range(len(videos)):
        temp_name.append(videos[i].artist_name)
        temp_image.append(videos[i].artwork_url_100)
        temp_link.append(videos[i].preview_url)
        temp_collection.append(videos[i].track_name)
        temp_year.append(videos[i].release_date[0:10])
        temp_type.append(videos[i].track_type)
    for i in range(len(videos)):
        data = {}
        data['name'] = temp_name[i]
        data['image'] = temp_image[i]
        data['preview_link'] = temp_link[i]
        data['collection_name'] = temp_collection[i]
        data['year'] = temp_year[i]
        data['type'] = temp_type[i]
        result['video'].append(ast.literal_eval(json.dumps(data)))



if __name__ == '__main__':
    result = {}
    result['video'] = []
    getVideo(result, 'oasis')
    getVideo(result, 'the beatles')
    getVideo(result, 'blake shelton')
    getVideo(result, 'sigur ros')
    getVideo(result, 'queen')
    getVideo(result, 'kanye west')

    with open('video_data.json', 'w') as outfile:
            json.dump(result, outfile, indent=4)