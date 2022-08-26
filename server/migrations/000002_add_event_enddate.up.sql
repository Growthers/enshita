-- events.endDateを追加
ALTER TABLE events ADD COLUMN endDate date;
-- endDateにNOT NULL制約を追加
ALTER TABLE events ALTER COLUMN endDate SET NOT NULL;

--  events.date -> events.startDateに変更
ALTER TABLE events RENAME COLUMN date TO startDate;

