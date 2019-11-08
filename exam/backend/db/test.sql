-- SELECT * 
-- FROM Question;

-- SELECT *
-- FROM Vote;

SELECT *
FROM Question as q LEFT JOIN Vote as v
    ON q.id = v.question_id;