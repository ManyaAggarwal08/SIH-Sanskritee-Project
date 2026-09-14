from fastapi import FastAPI
from pydantic import BaseModel
from database import SessionLocal
from models import Place, GateDetail, HeritageEvent

app = FastAPI()

class UserRequest(BaseModel):
    days: int
    interest: str

class PlaceCreate(BaseModel):
    name: str
    alternate_name: str | None = None
    district: str | None = None
    state: str | None = None
    place_type: str | None = None

    introduction: str | None = None
    location_description: str | None = None

    best_months: str | None = None
    best_time_of_day: str | None = None
    suggested_year: int | None = None

    mythological_religious_importance: str | None = None
    historical_importance: str | None = None
    relation_to_indian_heritage: str | None = None

    fun_facts: str | None = None
    atmosphere_vibe: str | None = None
    one_line_speciality: str | None = None

    unesco_status: str | None = None
    protected_by: str | None = None

class PlaceUpdate(BaseModel):
    name: str | None = None
    alternate_name: str | None = None
    district: str | None = None
    state: str | None = None
    place_type: str | None = None

    introduction: str | None = None
    location_description: str | None = None

    best_months: str | None = None
    best_time_of_day: str | None = None
    suggested_year: int | None = None

    mythological_religious_importance: str | None = None
    historical_importance: str | None = None
    relation_to_indian_heritage: str | None = None

    fun_facts: str | None = None
    atmosphere_vibe: str | None = None
    one_line_speciality: str | None = None

    unesco_status: str | None = None
    protected_by: str | None = None

@app.get("/")
def home():
    return{"message": "Welcome to Sanskritee"}

places = [
        {
            "id": 1,
            "name": "Bibi Ka Maqbara",
            "type": "Historical Monument"
        },
        {
            "id": 2,
            "name": "Daulatabad Fort",
            "type": "Fort"
        },
        {
            "id": 3,
            "name": "Ellora Caves",
            "type": "Heritage Site"
        }
    ]

@app.get("/places")
def get_places():
    db = SessionLocal()
    places = db.query(Place).all()
    db.close()

    return places

@app.get("/places/{place_id}")
def get_place(place_id: int):
    db = SessionLocal()
    place = db.query(Place).filter(Place.place_id == place_id).first()
    db.close()

    if place is None:
        return{"message":"Place not found"}

    return place

@app.get("/gates")
def get_gates():
    db = SessionLocal()
    gates = db.query(GateDetail).all()
    db.close()
    return gates

@app.get("/gates/{gate_id}")
def get_gate(gate_id: int):
    db = SessionLocal()
    gate = db.query(GateDetail).filter(GateDetail.gate_id == gate_id).first()
    db.close()

    if gate is None:
        return {"message": "Gate not found"}

    return gate

@app.get("/events")
def get_events():
    db = SessionLocal()
    events = db.query(HeritageEvent).all()
    db.close()
    return events

@app.get("/events/{event_id}")
def get_event(event_id: int):
    db = SessionLocal()
    event = db.query(HeritageEvent).filter(HeritageEvent.event_id == event_id).first()
    db.close()

    if event is None:
        return {"message": "Event not found"}

    return event

    
@app.post("/places")
def create_place(place: PlaceCreate):
    db = SessionLocal()

    new_place = Place(
        name=place.name,
        alternate_name=place.alternate_name,
        district=place.district,
        state=place.state,
        place_type=place.place_type,

        introduction=place.introduction,
        location_description=place.location_description,

        best_months=place.best_months,
        best_time_of_day=place.best_time_of_day,
        suggested_year=place.suggested_year,

        mythological_religious_importance=place.mythological_religious_importance,
        historical_importance=place.historical_importance,
        relation_to_indian_heritage=place.relation_to_indian_heritage,

        fun_facts=place.fun_facts,
        atmosphere_vibe=place.atmosphere_vibe,
        one_line_speciality=place.one_line_speciality,

        unesco_status=place.unesco_status,
        protected_by=place.protected_by
    )

    db.add(new_place)
    db.commit()
    db.refresh(new_place)

    db.close()

    return new_place

@app.put("/places/{place_id}")
def update_place(place_id: int, place: PlaceUpdate):
    db = SessionLocal()

    existing_place = (
        db.query(Place)
        .filter(Place.place_id == place_id)
        .first()
    )

    if existing_place is None:
        db.close()
        return {"message": "Place not found"}

    if place.name is not None:
        existing_place.name = place.name

    if place.alternate_name is not None:
        existing_place.alternate_name = place.alternate_name

    if place.district is not None:
        existing_place.district = place.district

    if place.state is not None:
        existing_place.state = place.state

    if place.place_type is not None:
        existing_place.place_type = place.place_type

    if place.introduction is not None:
        existing_place.introduction = place.introduction

    if place.location_description is not None:
        existing_place.location_description = place.location_description

    if place.best_months is not None:
        existing_place.best_months = place.best_months

    if place.best_time_of_day is not None:
        existing_place.best_time_of_day = place.best_time_of_day

    if place.suggested_year is not None:
        existing_place.suggested_year = place.suggested_year

    if place.mythological_religious_importance is not None:
        existing_place.mythological_religious_importance = (
            place.mythological_religious_importance
        )

    if place.historical_importance is not None:
        existing_place.historical_importance = place.historical_importance

    if place.relation_to_indian_heritage is not None:
        existing_place.relation_to_indian_heritage = (
            place.relation_to_indian_heritage
        )

    if place.fun_facts is not None:
        existing_place.fun_facts = place.fun_facts

    if place.atmosphere_vibe is not None:
        existing_place.atmosphere_vibe = place.atmosphere_vibe

    if place.one_line_speciality is not None:
        existing_place.one_line_speciality = place.one_line_speciality

    if place.unesco_status is not None:
        existing_place.unesco_status = place.unesco_status

    if place.protected_by is not None:
        existing_place.protected_by = place.protected_by

    db.commit()
    db.refresh(existing_place)
    db.close()

    return existing_place

@app.delete("/places/{place_id}")
def delete_place(place_id: int):
    db = SessionLocal()

    place = db.query(Place).filter(Place.place_id == place_id).first()

    if place is None:
        db.close()
        return {"message": "Place not found"}

    db.delete(place)
    db.commit()

    db.close()

    return {"message": "Place deleted successfully"}
