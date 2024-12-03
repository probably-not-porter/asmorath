from datetime import date
from flask import Flask, jsonify, request, render_template
import json
import os

pages = [
    {
        "page": "home.html",
        "name": "Home",
        "subsec": []
    },
    {
        "page": "introduction.html",
        "name": "Introduction",
        "subsec": []
    },
    {
        "page": "geopolitical.html",
        "name": "Geopolitical Locations",
        "subsec": [
            {
                "page": "quinterra.html",
                "name": "Quinterra"
            },
            {
                "page": "vespusa.html",
                "name": "Vespusa"
            },
            {
                "page": "orthomena.html",
                "name": "Orthomena"
            },
            {
                "page": "demacia.html",
                "name": "Demacia"
            },
            {
                "page": "lucacia.html",
                "name": "Lucacia"
            },
            {
                "page": "principium.html",
                "name": "Principium"
            },
            {
                "page": "demascyrna.html",
                "name": "Demascyrna"
            },
            {
                "page": "scypia.html",
                "name": "Scypia"
            },
            {
                "page": "skatana.html",
                "name": "Sk'tana"
            },
            {
                "page": "kanasmora.html",
                "name": "Kanasmora"
            },
            {
                "page": "unclaimed_lands.html",
                "name": "Unclaimed Lands"
            }
        ]
    },
    {
        "page": "geography.html",
        "name": "Geography",
        "subsec": []
    },
    {
        "page": "gods.html",
        "name": "Gods of Asmorath",
        "subsec": []
    },
    {
        "page": "magic.html",
        "name": "Magic",
        "subsec": [
            {
                "page": "elemental_magic.html",
                "name": "Elemental Magic"
            }
        ]
    },
    {
        "page": "races.html",
        "name": "Races of Asmorath",
        "subsec": []
    },
    {
        "page": "classes.html",
        "name": "Classes of Asmorath",
        "subsec": []
    },
    {
        "page": "maps.html",
        "name": "Maps",
        "subsec": []
    },
    {
        "page": "interactive_map.html",
        "name": "Interactive Map",
        "subsec": []
    },
    {
        "page": "credits.html",
        "name": "Credits",
        "subsec": []
    },
]



app = Flask(__name__)

# WEB ROUTES
@app.route("/")
@app.route("/pages/0")
def serve_home():
    return render_template('home.html',pages=pages)


@app.route("/pages/<path:page_path>")
def serve_page(page_path):
    page_html = get_page(page_path)
    if page_html == -1:
        return render_template("error.html")
    
    page_prev = get_prev(page_path)
    page_next = get_next(page_path)
    return render_template(page_html, 
                           current_num=page_path, 
                           current_name = get_page_name(page_path),
                           next_num=page_next, 
                           next_name = get_page_name(page_next),
                           prev_num=page_prev,
                           prev_name = get_page_name(page_prev))



def get_page_name(page_path):
    page_index = page_path.split(".")
    if int(page_index[0]) == 0: return -1

    if len(page_index) == 1:    # if on a main page
        if len(pages) > int(page_index[0]):
            return pages[int(page_index[0])]["name"]
        else:
            return -1
    else:
        if len(pages) > int(page_index[0]):
            return pages[int(page_index[0])]["subsec"][int(page_index[1]) - 1]["name"]
        else:
            return -1

def get_next(page_path):
    page_index = page_path.split(".")
    if len(page_index) == 1:    # if on a main page
        if len(pages[int(page_index[0])]["subsec"]) > 0: # if current page has subpages
            return page_index[0] + ".1"
        else: # if current page has no subpages
            if len(pages) > int(page_index[0]): # and the next page exists
                return str(int(page_index[0]) + 1)
            else: 
                return -1 # no more pages

    else: # on a subpage
        if len(pages[int(page_index[0])]["subsec"]) > int(page_index[1]): # next subpage exists
            return str(page_index[0]) + "." + str(int(page_index[1]) + 1)
        else: # no next subpage
            if len(pages) > int(page_index[0]): # and the next page exists
                return str(int(page_index[0]) + 1)
            else: 
                return -1 # no more pages




def get_prev(page_path):
    page_index = page_path.split(".")
    if len(page_index) == 1:    # if on a main page
        prev_page_num = int(page_index[0]) - 1
        if len(pages[prev_page_num]["subsec"]) > 0:     # if previous page has subpages
            return str(prev_page_num) + "." + str(len(pages[prev_page_num]["subsec"]))
        else:   # if previous page doesnt have any subpages
            return str(prev_page_num)

    else:   # if on a subpage
        if int(page_index[1]) == 1: # if on the first subpage
            return page_index[0]
        if int(page_index[1]) > 1: # if on a subsequent subpage
            return page_index[0] + "." + str(int(page_index[1]) - 1)


def get_page(page_path):
    page_index = page_path.split(".")
    if len(page_index) == 1:
        page_num = int(page_index[0])
        if len(pages) > page_num:
            return pages[page_num]["page"]
        else:
            return -1
    else:
        page_num = int(page_index[0])
        subpage_num = int(page_index[1]) - 1
        if len(pages) > page_num:
            if len(pages[page_num]["subsec"]) > subpage_num:
                return pages[page_num]["subsec"][subpage_num]["page"]
            else:
                return -1
        else:
            return -1

# Start server
if __name__=='__main__':
    app.run(host="0.0.0.0",port=4602)