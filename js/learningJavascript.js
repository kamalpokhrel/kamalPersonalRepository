const x= 12;
const y= 23;
y>x ? console.log("Y is greater") : (x>y ? console.log("X is greater") : console.log("Both are equal"));

const name=["kamal","hari","shyam","ram"];
    console.log(name.length);
    for (let x=0; x < length.name; x++){
        console.log(JSON.stringify(name[x]));
        const columns = [
            { label: 'タイトル', fieldName: 'Title', wrapText : true,
                cellAttributes: { 
                    iconName: { fieldName: 'icon' }, iconPosition: 'left' 
                }
            },
            { label: '作成者',  fieldName: 'CREATED_BY',
                cellAttributes: { 
                    iconName: 'standard:user', iconPosition: 'left' 
                }
            },
            { label: 'サイズ',   fieldName: 'Size' },
            { label: 'プレビュー', type:  'button', typeAttributes: { 
                    label: 'プレビュー',  name: 'Preview',  variant: 'brand-outline',
                    iconName: 'utility:preview', iconPosition: 'right'
                } 
            },
            { label: 'ダウンロード', type:  'button', typeAttributes: { 
                    label: 'ダウンロード', name: 'Download', variant: 'brand', iconName: 'action:download', 
                    iconPosition: 'right' 
                } 
            },
            { label: '削除', type:  'button', typeAttributes: { 
                    label: '削除',   name: 'Delete',   variant: 'destructive',iconName: 'standard:record_delete', 
                    iconPosition: 'right' 
                } 
            } 
        ];
        
