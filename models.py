from sqlalchemy import Column, Integer, String, Text, ForeignKey
from database import Base


class Place(Base):
    __tablename__ = "heritage_places"

    place_id = Column(Integer, primary_key=True, autoincrement=True)

    name = Column(String(150), nullable=False)
    alternate_name = Column(String(150))

    district = Column(String(150))
    state = Column(String(100))

    place_type = Column(String(100))

    introduction = Column(Text)
    location_description = Column(Text)

    best_months = Column(String(100))
    best_time_of_day = Column(String(100))
    suggested_year = Column(Integer)

    mythological_religious_importance = Column(Text)
    historical_importance = Column(Text)
    relation_to_indian_heritage = Column(Text)

    fun_facts = Column(Text)
    atmosphere_vibe = Column(Text)
    one_line_speciality = Column(Text)

    unesco_status = Column(String(100))
    protected_by = Column(String(200))


class GateDetail(Base):
    __tablename__ = "gate_details"

    gate_id = Column(Integer, primary_key=True, autoincrement=True)
    place_id = Column(
        Integer,
        ForeignKey("heritage_places.place_id"),
        nullable=False
    )
    gate_name = Column(String(100), nullable=False)
    description = Column(Text)

class HeritageEvent(Base):
    __tablename__ = "heritage_events"

    event_id = Column(Integer, primary_key=True, autoincrement=True)

    event_name = Column(String(150), nullable=False)
    alternate_name = Column(String(150))

    location = Column(String(200))
    district = Column(String(150))
    state = Column(String(100))

    duration = Column(String(100))
    best_period = Column(String(150))
    best_time_of_day = Column(String(100))

    introduction = Column(Text)
    religious_importance = Column(Text)
    historical_cultural_importance = Column(Text)
    relation_to_indian_heritage = Column(Text)

    fun_facts = Column(Text)
    atmosphere_vibe = Column(Text)
    one_line_speciality = Column(Text)