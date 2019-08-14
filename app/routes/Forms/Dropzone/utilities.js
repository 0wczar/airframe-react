export const typeToIcon = type => {
    const map = {
        ['application/msword']: 'fa-file-word-o',
        ['application/excel']: 'fa-file-excel-o',
        ['application/vnd.oasis.opendocument.spreadsheet']: 'fa-file-excel-o',
        ['application/vnd.oasis.opendocument.presentation']: 'fa-file-powerpoint-o',
        ['application/mspowerpoint']: 'fa-file-powerpoint-o',
        ['application/x-zip-compressed']: 'fa-file-archive-o',
        ['image/jpeg']: 'fa-file-image-o',
        ['image/png']: 'fa-file-image-o',
        ['audio/mp3']: 'fa-file-audio-o',
        ['text/plain']: 'fa-file-text-o'
    }
    return map[type] || null;
}

export const extToIcon = filename => {
    const map = {
        ['doc']: 'fa-file-word-o',
        ['docx']: 'fa-file-word-o',
        ['xls']: 'fa-file-excel-o',
        ['xlsx']: 'fa-file-excel-o',
        ['ppt']: 'fa-file-powerpoint-o',
        ['pdf']: 'fa-file-pdf-o'
    }

    return map[filename.split('.').pop()] || null;
}

export const getFileIcon = file => {
    return typeToIcon(file.type) || extToIcon(file.name) || 'fa-file-o';
}