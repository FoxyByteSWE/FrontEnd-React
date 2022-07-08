import sys, os
import hashlib

sys.path.insert(1, (str(sys.path[0]))+"/../../RankingService/")
sys.path.insert(1, (str(sys.path[0]))+"/../../IGCrawlerService/crawler/")

from S3Connection import S3Connection
from DBConnection import DBConnection

# S3 bucket name
BUCKET_NAME = "foxybyteswe"

def createUsersDatabase():
	db = DBConnection()

	db.createDatabaseConnection("MichelinSocial")

	query = """CREATE TABLE IF NOT EXISTS Users(
		Email VARCHAR(50) PRIMARY KEY,
		Username VARCHAR(20) NOT NULL,
		Password VARCHAR(100) NOT NULL,
		Admin tinyint(1)
	)"""

	db.executeQuery(query)

	mail = '" test.ecample@gmail.com", '
	name = '"Test Name", '
	password = 'TestPassword'
	password = '"' + hashlib.sha256(password.encode('utf-8')).hexdigest() + '", '
	admin = '"0"'
	query = "INSERT INTO Users VALUES (" + mail + name + password + admin + ');'

	db.executeQuery(query)

	db.uploadDB("MichelinSocial", (str(sys.path[0]))+"/../../RankingService/")

def main():
	createUsersDatabase()

if __name__ == "__main__":
	main()
