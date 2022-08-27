-- layouts.imageURLを追加
ALTER TABLE layouts ADD COLUMN imageURL varchar(256);

-- layouts.imageURLにNOT NULL制約を追加
ALTER TABLE layouts ALTER COLUMN imageURL SET NOT NULL;
