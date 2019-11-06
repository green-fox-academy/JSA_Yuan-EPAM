-- SHOW tables;

-- SELECT * 
-- FROM author;

-- SELECT * 
-- FROM book_mast;

-- SELECT * 
-- FROM category;

-- SELECT *
-- FROM newpublisher;

-- SELECT *
-- FROM order;

-- SELECT *
-- FROM publisher;

-- SELECT *
-- FROM purchase;

SELECT bk.book_id, bk.cate_id, bk.pub_id, bk.book_name, aut.aut_name, cate.cate_descrip, npub.pub_name, p.purch_price
FROM book_mast as bk INNER JOIN author as aut
    ON bk.aut_id = aut.aut_id INNER JOIN category as cate 
    ON bk.cate_id = cate.cate_id INNER JOIN newpublisher as npub 
    ON bk.pub_id = npub.pub_id INNER JOIN purchase as p
    ON bk.book_id = p.book_id AND bk.cate_id = p.cate_id;// let bookInfor = {