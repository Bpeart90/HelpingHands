INSERT INTO volunteer.creators
    (id, name, createdAt, updatedAt)
VALUES
    (1, 'Soup Kitchen', 0 , 0 );
INSERT INTO volunteer.creators
    (id, name, createdAt, updatedAt)
VALUES
    (2, 'Litter Cleanup', 0 , 0 );

INSERT INTO volunteer.volunteers
    (id, volunteer_email, password,createdAt, updatedAt)
VALUES
    (1, "meow@gmail.com", "meow", 0 , 0 );
INSERT INTO volunteer.volunteers
    (id, volunteer_email, password, createdAt, updatedAt)
VALUES
    (2, "bark@gmail.com", "bark", 0 , 0 );


INSERT INTO opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, creatorId, volunteerId)
VALUES
    ('Soup Kitchen', 5, "soupKitchen@gmail.com", "Line Cooks", true, 0 , 0 , 1 , 1  );
INSERT INTO opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, creatorId, volunteerId)
VALUES
    ('Litter Cleanup', 6, "highwayCleanup@gmail.com", "Sunday Morning Help", false, 0 , 0 , 1 , 1  );
INSERT INTO opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, creatorId, volunteerId)
VALUES
    ('Blood Drive', 6, "redCross@gmail.com", "Blood Drive Saturday", true, 0 , 0 , 1 , 1  );
INSERT INTO opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, creatorId, volunteerId)
VALUES
    ('Tutor Services', 6, "learningAssistant@gmail.com", "Math Tutor Help", true, 0 , 0 , 1 , 1  );