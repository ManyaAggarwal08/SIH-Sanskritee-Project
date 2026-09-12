from database import SessionLocal
from models import Place 

db = SessionLocal()

places = db.query(Place).all()

for place in places:
    print(place.id)
    print(place.name)
    print(place.location)

db.close()