import xml.etree.ElementTree as ET
import sqlite3

conn = sqlite3.connect('trackdb.sqlite')
cur = conn.cursor()


# fname = input('Enter file name: ')
# if ( len(fname) < 1 ) : fname = 'Library.xml'

for row in cur.execute('''SELECT Track.title, Artist.name, Album.title, Genre.name FROM Track JOIN Genre JOIN Album JOIN Artist ON Track.genre_id = Genre.ID and Track.album_id = Album.id AND Album.artist_id = Artist.id ORDER BY Artist.name LIMIT 3'''):
	print(str(row));


# for row in cur.execute('''SELECT * FROM Genre LIMIT 3'''):
# 	print(str(row));
