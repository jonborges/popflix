import { useState, useEffect } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        // Carregar vídeos do localStorage ao montar o componente
        const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
        console.log('Vídeos carregados do localStorage:', storedVideos); // Log para depuração
        setVideos(storedVideos);
    }, []);

    function getVideoId(url) {
        // Regex atualizado para diferentes formatos de URL do YouTube
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        console.log('ID do vídeo extraído:', match ? match[1] : null); // Log para depuração
        return match ? match[1] : null;
    }

    function onSave(e) {
        e.preventDefault();

        if (!category || category === '-') {
            setErrors('ERRO: Escolha uma categoria!');
            return;
        } else {
            setErrors('');
        }

        const videoId = getVideoId(url);
        if (videoId) {
            const newVideo = {
                id: videoId,
                title: 'Título do Vídeo', // Placeholder para o título
                category
            };
            console.log('Novo vídeo a ser adicionado:', newVideo); // Log para depuração
            const updatedVideos = [...videos, newVideo];
            setVideos(updatedVideos);
            localStorage.setItem('videos', JSON.stringify(updatedVideos));
            setUrl('');
            setCategory('');
            setErrors('');
        } else {
            setErrors('ERRO: URL inválida!');
        }
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;
