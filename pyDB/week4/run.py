import sqlite3

conn = sqlite3.connect('rosterdb.sqlite')
cur = conn.cursor()

for row in cur.execute('''SELECT hex(User.name || Course.title || Member.role ) AS X FROM User JOIN Member JOIN Course ON User.id = Member.user_id AND Member.course_id = Course.id ORDER BY X'''):
	print(str(row));
# for row in cur.execute('''SELECT * FROM User limit 3'''):
# 	print(str(row));