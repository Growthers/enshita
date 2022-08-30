-- speakers.paragraphを追加
ALTER TABLE speakers ADD COLUMN paragraph text;

-- speakers.paragraphにNOT NULL制約を追加
ALTER TABLE speakers ALTER COLUMN paragraph SET NOT NULL;
